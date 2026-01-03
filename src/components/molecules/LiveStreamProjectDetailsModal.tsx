"use client";

export const LiveStreamProjectDetailsModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300" 
        onClick={onClose} 
        aria-hidden="true" 
      />
      <div className="relative w-full max-w-2xl rounded-[var(--radius-lg)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-strong)] transition-all duration-300 ease-out-expo transform scale-95 animate-scale-in">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors duration-200"
          aria-label="关闭"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <div className="max-h-[80vh] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[var(--color-border)] scrollbar-track-[var(--color-surface)] scrollbar-rounded">
          <h2 className="text-2xl font-bold mb-4 text-[var(--color-text)]">直播间产品项目详情</h2>
          <div className="space-y-6">
            <div className="bg-[var(--color-surface-alt)] rounded-[var(--radius-md)] p-5 transition-all duration-300 hover:shadow-[var(--shadow-soft)]">
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-text)]">直播互动逻辑</h3>
              <p className="text-base leading-relaxed text-[var(--color-text-muted)]">
                重构用户进出直播间、弹幕互动、连麦申请等核心流程；优化直播间加载性能，实现首屏打开时间缩短至1.2秒。
                设计并落地用户等级与特权体系，显著提升高价值用户的留存率，核心用户月度互动频次增加50%。
              </p>
            </div>
            
            <div className="bg-[var(--color-surface-alt)] rounded-[var(--radius-md)] p-5 transition-all duration-300 hover:shadow-[var(--shadow-soft)]">
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-text)]">虚拟礼物与商业化设计</h3>
              <p className="text-base leading-relaxed text-[var(--color-text-muted)]">
                独立完成虚拟礼物商品体系的规划，涵盖普通礼物、特效礼物、盲盒类礼物等多种形态；
                设计完整的礼物赠送机制、排行榜规则及动效反馈系统；
                通过价格梯度设置与限量策略，推动直播板块ARPU值环比提升40%，礼物收入占比达直播总收入70%以上。
              </p>
            </div>
            
            <div className="bg-[var(--color-surface-alt)] rounded-[var(--radius-md)] p-5 transition-all duration-300 hover:shadow-[var(--shadow-soft)]">
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-text)]">直播运营工具搭建</h3>
              <p className="text-base leading-relaxed text-[var(--color-text-muted)]">
                为运营团队设计并交付直播后台管理系统，支持实时数据监控看板、礼物库存配置、活动开关等功能模块；
                显著提升运营效率，新活动上线平均耗时减少约60%。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};