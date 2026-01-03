import Image from 'next/image';
import { SocialCard } from '@/components/molecules/SocialCard';
import { SectionWrapper } from '@/components/organisms/SectionWrapper';
import { FadeIn } from '@/components/utility/FadeIn';
import { profileData } from '@/data/profile';

export const SocialSection = () => (
  <SectionWrapper id="social" title="Social" subtitle="社交网络与创作渠道">
    <FadeIn className="grid gap-4 md:grid-cols-2">
      {profileData.social.links.map((link) => {
        // 使用真实的SVG图标文件
        let iconElement = null;
        if (link.iconKey === 'wechat') {
          iconElement = (
            <Image
              src="/images/icons/wechat.svg"
              alt="微信"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          );
        } else if (link.iconKey === 'douyin') {
          iconElement = (
            <Image
              src="/images/icons/douyin.svg"
              alt="抖音"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          );
        } else if (link.iconKey === 'twitter') {
          iconElement = (
            <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          );
        }
        return (
          <SocialCard key={link.platform} data={link} icon={iconElement} />
        );
      })}
    </FadeIn>
  </SectionWrapper>
);