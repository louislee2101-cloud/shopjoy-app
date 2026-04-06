import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const navigate = useNavigate();
  const orders = [
    { icon: '💳', label: '待付款', bg: '#FFF0F0', badge: 2 },
    { icon: '📦', label: '待发货', bg: '#FFF5E0' },
    { icon: '🚚', label: '待收货', bg: '#F0FFF4' },
    { icon: '⭐', label: '待评价', bg: '#F0F7FF' },
    { icon: '↩️', label: '退换货', bg: '#FFF0FA' },
  ];
  const menus = [
    { icon: '❤️', label: '我的收藏', bg: '#FFF0F0' },
    { icon: '📍', label: '收货地址', bg: '#FFF5E0' },
    { icon: '🎁', label: '领券中心', bg: '#F0FFF4' },
    { icon: '🔒', label: '账号安全', bg: '#F0F7FF' },
  ];

  return (
    <div style={{ width: '375px', height: '812px', overflow: 'hidden', background: '#f5f5f5', position: 'relative' }}>
      {/* 顶部背景 */}
      <div style={{
        background: 'linear-gradient(135deg, #FF6B6B, #FF8E53, #FFC947)',
        padding: '48px 20px 70px', position: 'relative', overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', width: '160px', height: '160px', borderRadius: '50%',
          background: 'rgba(255,255,255,0.1)', top: '-40px', right: '-40px'
        }} />
        <div style={{ fontSize: '22px', position: 'absolute', top: '48px', right: '20px' }}>⚙️</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{
            width: '68px', height: '68px', borderRadius: '50%', background: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '36px', boxShadow: '0 4px 16px rgba(0,0,0,0.15)', flexShrink: 0
          }}>👤</div>
          <div>
            <div style={{ fontSize: '20px', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>Jerry Wen</div>
            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.8)', marginBottom: '8px' }}>ID: 88234567</div>
            <div style={{ background: 'rgba(255,255,255,0.25)', color: '#fff', fontSize: '11px', padding: '3px 10px', borderRadius: '10px', display: 'inline-block' }}>👑 VIP 会员</div>
          </div>
        </div>
      </div>

      {/* 内容滚动区 */}
      <div style={{ height: '672px', overflowY: 'auto', paddingBottom: '80px' }}>
        {/* 数据卡片 */}
        <div style={{
          background: '#fff', borderRadius: '20px', margin: '-40px 16px 12px',
          padding: '20px', display: 'flex', justifyContent: 'space-around',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)', position: 'relative', zIndex: 2
        }}>
          {[{ num: '128', label: '关注' }, { num: '36', label: '粉丝' }, { num: '2,840', label: '积分' }, { num: '¥56', label: '优惠券' }].map((s, i) => (
            <React.Fragment key={i}>
              {i > 0 && <div style={{ width: '1px', background: '#f0f0f0' }} />}
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '20px', fontWeight: 800, color: '#222' }}>{s.num}</div>
                <div style={{ fontSize: '11px', color: '#999', marginTop: '2px' }}>{s.label}</div>
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* 订单 */}
        <div style={{ background: '#fff', borderRadius: '16px', margin: '0 16px 12px', padding: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <span style={{ fontSize: '15px', fontWeight: 700, color: '#222' }}>我的订单</span>
            <span style={{ fontSize: '12px', color: '#FF6B6B' }}>全部订单 ›</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            {orders.map(o => (
              <div key={o.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                <div style={{ position: 'relative' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: o.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px' }}>{o.icon}</div>
                  {o.badge && <div style={{ position: 'absolute', top: '-4px', right: '-4px', background: '#FF6B6B', color: '#fff', fontSize: '10px', width: '16px', height: '16px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{o.badge}</div>}
                </div>
                <div style={{ fontSize: '11px', color: '#555' }}>{o.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 菜单 */}
        <div style={{ background: '#fff', borderRadius: '16px', margin: '0 16px 12px', padding: '16px' }}>
          {menus.map((m, i) => (
            <div key={m.label} style={{
              display: 'flex', alignItems: 'center', gap: '12px',
              padding: '13px 0',
              borderBottom: i < menus.length - 1 ? '1px solid #f5f5f5' : 'none',
              cursor: 'pointer'
            }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: m.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>{m.icon}</div>
              <div style={{ fontSize: '14px', color: '#333', flex: 1 }}>{m.label}</div>
              <div style={{ fontSize: '14px', color: '#ccc' }}>›</div>
            </div>
          ))}
        </div>
      </div>

      {/* 底部导航 */}
      <div style={{
        position: 'absolute', bottom: 0, width: '375px', height: '70px',
        background: '#fff', borderTop: '1px solid #f0f0f0',
        display: 'flex', alignItems: 'center', justifyContent: 'space-around', paddingBottom: '8px'
      }}>
        {[
          { icon: '🏠', label: '首页', path: '/home', active: false },
          { icon: '🔍', label: '发现', path: '/home', active: false },
          { icon: '🛒', label: '购物车', path: '/cart', active: false },
          { icon: '👤', label: '我的', path: '/profile', active: true },
        ].map(tab => (
          <div key={tab.label} onClick={() => navigate(tab.path)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
            <div style={{ fontSize: '22px' }}>{tab.icon}</div>
            <div style={{ fontSize: '10px', color: tab.active ? '#FF6B6B' : '#bbb' }}>{tab.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
