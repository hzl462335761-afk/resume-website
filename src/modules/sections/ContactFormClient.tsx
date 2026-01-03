"use client";

import { FormEvent } from 'react';
import { Button } from '@/components/atoms/Button';
import { profileData } from '@/data/profile';
import { useForm } from '@/hooks/useForm';

export const ContactFormClient = () => {
  const { values, errors, status, handleChange, submit, resetStatus } = useForm(profileData.contact.formFields);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const result = await submit();
    if (!result.ok) {
      setTimeout(() => resetStatus(), 2000);
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      {profileData.contact.formFields.map((field) => (
        <label key={field.name} className="flex flex-col gap-2">
          <span className="text-sm font-medium text-[var(--color-text)]">
            {field.label}
            {field.required && <sup className="text-[var(--color-error)]">*</sup>}
          </span>
          {field.type === 'textarea' ? (
            <textarea
              value={values[field.name]}
              onChange={(e) => handleChange(field.name, e.target.value)}
              placeholder={field.placeholder || `${field.label}`}
              className="form-field min-h-[140px] w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 transition-all duration-300 focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-opacity-20"
            />
          ) : (
            <input
              value={values[field.name]}
              onChange={(e) => handleChange(field.name, e.target.value)}
              placeholder={field.placeholder || `${field.label}`}
              type={field.type}
              className="form-field w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 transition-all duration-300 focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-opacity-20"
            />
          )}
          {errors[field.name] && <span className="text-xs text-[var(--color-error)]">{errors[field.name]}</span>}
        </label>
      ))}
      <Button
        label={status === 'submitting' ? '发送中...' : '发送信息'}
        variant="primary"
        type="submit"
        disabled={status === 'submitting'}
      />
      {status === 'success' && <p className="text-sm text-[var(--color-success)]">{profileData.contact.successMessage}</p>}
      {status === 'error' && <p className="text-sm text-[var(--color-error)]">{profileData.contact.errorMessage}</p>}
    </form>
  );
};

