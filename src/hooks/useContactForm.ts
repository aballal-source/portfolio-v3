import { useState } from 'react';
import type { FormData, FormErrors, FormStatus } from '@/types';

/**
 * Hook to manage contact form state and validation
 * @returns Form state and handlers
 */
export function useContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  
  const [formErrors, setFormErrors] = useState<FormErrors>({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');

  const validateForm = (): boolean => {
    const errors: FormErrors = {
      name: '',
      email: '',
      message: ''
    };
    
    // Validate name
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    // Validate email
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Invalid email format';
    }
    
    // Validate message
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }

    setFormErrors(errors);
    return !Object.values(errors).some(error => error !== '');
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setFormStatus('loading');

    const messageContent = {
      content: `New message from ${formData.name} (${formData.email}):\n${formData.message}`
    };

    try {
      const response = await fetch('portfolio-v3-z1yp.vercel.app/send-to-discord', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(messageContent)
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      console.error('Error sending message to Discord:', error);
      setFormStatus('error');
    } finally {
      setTimeout(() => setFormStatus('idle'), 3000);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return {
    formData,
    formErrors,
    formStatus,
    handleSubmit,
    handleInputChange
  };
}