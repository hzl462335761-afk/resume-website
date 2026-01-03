import { SectionWrapper } from '@/components/organisms/SectionWrapper';
import { FadeIn } from '@/components/utility/FadeIn';
import { profileData } from '@/data/profile';
import { ContactFormClient } from '@/modules/sections/ContactFormClient';
import Image from 'next/image';

export const ContactSection = () => (
  <SectionWrapper id="contact" title="Contact" subtitle="联系我，聊聊 AI 产品合作">
    <FadeIn className="grid gap-8 md:grid-cols-2">
      <div className="flex flex-col justify-between rounded-3xl border border-[var(--color-border)] bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-background)] p-8 shadow-[var(--shadow-soft)]">
        <div className="space-y-6">
          <div>
            <h3 className="text-[var(--font-size-lg)] font-[var(--font-weight-semibold)] bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent">联系信息</h3>
            <p className="mt-2 text-[var(--font-size-sm)] text-[var(--color-text-muted)]">也可以通过以下方式直接联系我：</p>
          </div>
          <ul className="space-y-6">
            <li>
              <p className="text-sm font-[var(--font-weight-medium)] text-[var(--color-text-muted)] mb-2">邮箱</p>
              <a 
                className="block text-[var(--font-size-lg)] font-[var(--font-weight-semibold)] text-[var(--color-primary)] hover:text-[var(--color-primary-accent)] transition-colors duration-300" 
                href={`mailto:${profileData.contact.email}`}
              >
                {profileData.contact.email}
              </a>
            </li>
            <li>
              <p className="text-sm font-[var(--font-weight-medium)] text-[var(--color-text-muted)] mb-2">电话</p>
              <a 
                className="block text-[var(--font-size-lg)] font-[var(--font-weight-semibold)] text-[var(--color-primary)] hover:text-[var(--color-primary-accent)] transition-colors duration-300" 
                href={`tel:${profileData.contact.phone}`}
              >
                {profileData.contact.phone}
              </a>
            </li>
            <li>
              <p className="text-sm font-[var(--font-weight-medium)] text-[var(--color-text-muted)] mb-2">地址</p>
              <p className="text-[var(--font-size-lg)] font-[var(--font-weight-semibold)] text-[var(--color-text)]">{profileData.contact.address}</p>
            </li>
          </ul>
        </div>
        <div className="mt-8 pt-8 border-t border-[var(--color-border-light)]">
          <p className="text-[var(--font-size-sm)] text-[var(--color-text-muted)]">期待与您的交流与合作！</p>
        </div>
      </div>
      <div className="rounded-3xl border border-[var(--color-border)] bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-background)] p-8 shadow-[var(--shadow-soft)]">
        <ContactFormClient />
      </div>
    </FadeIn>
  </SectionWrapper>
);