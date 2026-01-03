"use client";

import { useState } from 'react';
import { ContactField } from '@/types/profile';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

type FormValues = Record<string, string>;

const validateField = (field: ContactField, value: string) => {
  if (field.required && !value.trim()) {
    return `${field.label} 为必填项`;
  }
  if (field.type === 'email' && value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return '请输入合法邮箱';
    }
  }
  return '';
};

export const useForm = (fields: ContactField[]) => {
  const initialValues = fields.reduce<FormValues>((acc, field) => {
    acc[field.name] = '';
    return acc;
  }, {});

  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormValues>(initialValues);
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = (name: string, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateAll = () => {
    const newErrors: FormValues = {};
    let isValid = true;

    fields.forEach((field) => {
      const error = validateField(field, values[field.name]);
      newErrors[field.name] = error;
      if (error) {
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const submit = async () => {
    if (!validateAll()) {
      return { ok: false };
    }
    setStatus('submitting');
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const success = Math.random() > 0.1;
    setStatus(success ? 'success' : 'error');
    if (success) {
      setValues(initialValues);
    }
    return { ok: success };
  };

  const resetStatus = () => setStatus('idle');

  return { values, errors, status, handleChange, submit, resetStatus };
};



