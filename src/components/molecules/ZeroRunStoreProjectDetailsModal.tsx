"use client";

export const ZeroRunStoreProjectDetailsModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} aria-hidden="true" />
      <div className="relative w-full max-w-2xl rounded-2xl bg-[var(--color-surface)] p-6 shadow-xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
          aria-label="关闭"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <h2 className="text-2xl font-bold mb-4">零跑商城小程序项目详情</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">全流程线上商城设计</h3>
            <p className="text-base leading-relaxed">
              设计从商品浏览、积分兑换、在线支付到收货评价的完整闭环流程；覆盖三类核心商品：用户福利（节日礼品、文化衫）、办公物料（笔记本、配件）及营销物料（宣传册、车模）。
              实现与公司HR系统及门禁系统的账户体系打通，确保权限准确无误；引入线上审批流机制，对特定高价值或大批量物料（如宣传品）实行部门主管审批，替代原有纸质流程，提升管理效率。
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">积分体系与成本管控</h3>
            <p className="text-base leading-relaxed">
              主导设计“积分+现金”混合支付模式：员工每月自动获得通用福利积分，并可将各类企业奖励（如创新奖、价值观奖）兑换为专属积分，增强激励感知与使用灵活性。
              搭建后台成本分析看板，实时监控不同类别物料的申领频率与支出情况，为年度福利预算制定提供数据支持；项目上线后，因避免重复采购和冗余申领，整体物料采购成本降低约15%。
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">仓储与物流体验优化</h3>
            <p className="text-base leading-relaxed">
              设计“总部仓 + 区域仓”的智能库存分配逻辑：员工下单后，系统根据其收货地址自动匹配最近仓库发货，平均收货时长由5天缩短至2天。
              集成物流状态跟踪功能，员工可在小程序内实时查看物品配送进度，相关客服咨询工作量减少70%，显著提升服务自助化水平。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};