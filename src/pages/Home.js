import React from 'react';
import { useNavigate } from 'react-router-dom';

const products = [
  { id: 1, name: '夏季连衣裙', price: '¥199', old: '¥399', emoji: '👗', bg: '#FFF0F0' },
  { id: 2, name: '智能手机', price: '¥2999', old: '¥3999', emoji: '📱', bg: '#F0F7FF' },
  { id: 3, name: '运动跑鞋', price: '¥399', old: '¥699', emoji: '👟', bg: '#FFF5E0' },
  { id: 4, name: '口红套装', price: '¥159', old: '¥259', emoji: '💄', bg: '#FFF0FA' },
];

const cats = [
  { emoji: '👗', name: '服装', bg: '#FFF0F0' },
  { emoji: '👟', name: '鞋靴', bg: '#FFF5E0' },
  { emoji: '📱', name: '数码', bg: '#F0F7FF' },
  { emoji: '🏠', name: '家居', bg: '#F0FFF4' },
  { emoji: '💄', name: '美妆', bg: '#FFF0FA' },
];

export default function Home() {
  const navigate = useNavigate();
  return (
    <div style={{ width: '375px', height: '812px', overflow: 'hidden', background: '#f5f5f5', position: 'relative' }}>
      {/* 顶部 */}
      <div style={{ background: 'linear-gradient(135deg, #FF6B6B, #FF8E53)', padding: '48px 20px 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
          <div>
            <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: '13px' }}>早上好 👋</div>
            <div style={{ color: '#fff', fontSize: '20px', fontWeight: 700 }}>Jerry</div>
          </div>
          <div style={{ display: 'flex', gap: '12px', fontSize: '22px' }}>
            <span>🔔</span>
            <span onClick={() => navigate('/cart')} style={{ cursor: 'pointer' }}>🛒</span>
          </div>
        </div>
        <div style={{
          background: '#fff', borderRadius: '24px', padding: '10px 16px',
          display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#bbb'
        }}>🔍 搜索商品、品牌...</div>
      </div>

      {/* 内容区 */}
      <div style={{ height: '672px', overflowY: 'auto', paddingBottom: '70px' }}>
        {/* Banner */}
        <div style={{
          margin: '16px', height: '160px',
          background: 'linear-gradient(135deg, #FFC947, #FF6B6B)',
          borderRadius: '20px', display: 'flex', alignItems: 'center',
          padding: '0 24px', position: 'relative', overflow: 'hidden'
        }}>
          <div style={{ zIndex: 2 }}>
            <div style={{ background: 'rgba(255,255,255,0.3)', color: '#fff', fontSize: '11px', padding: '3px 10px', borderRadius: '10px', marginBottom: '8px', display: 'inline-block' }}>限时特惠</div>
            <div style={{ fontSize: '22px', fontWeight: 800, color: '#fff', marginBottom: '6px' }}>夏日大促</div>
            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.85)', marginBottom: '12px' }}>全场低至 5 折起</div>
            <div style={{ background: '#fff', color: '#FF6B6B', fontSize: '12px', fontWeight: 700, padding: '6px 16px', borderRadius: '14px', display: 'inline-block' }}>立即抢购</div>
          </div>
          <div style={{ position: 'absolute', right: '20px', fontSize: '80px', opacity: 0.9 }}>🎉</div>
        </div>

        {/* 分类 */}
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 16px', marginBottom: '12px' }}>
          <span style={{ fontSize: '17px', fontWeight: 700, color: '#222' }}>商品分类</span>
          <span style={{ fontSize: '13px', color: '#FF6B6B' }}>查看全部</span>
        </div>
        <div style={{ display: 'flex', gap: '8px', padding: '0 16px', marginBottom: '20px', overflowX: 'auto' }}>
          {cats.map(c => (
            <div key={c.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', minWidth: '64px' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '16px', background: c.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '26px' }}>{c.emoji}</div>
              <div style={{ fontSize: '11px', color: '#555' }}>{c.name}</div>
            </div>
          ))}
        </div>

        {/* 商品 */}
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 16px', marginBottom: '12px' }}>
          <span style={{ fontSize: '17px', fontWeight: 700, color: '#222' }}>热销商品</span>
          <span style={{ fontSize: '13px', color: '#FF6B6B' }}>更多</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', padding: '0 16px' }}>
          {products.map(p => (
            <div key={p.id} onClick={() => navigate('/detail')} style={{
              background: '#fff', borderRadius: '16px', overflow: 'hidden',
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)', cursor: 'pointer'
            }}>
              <div style={{ height: '130px', background: p.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '52px' }}>{p.emoji}</div>
              <div style={{ padding: '10px 12px' }}>
                <div style={{ fontSize: '13px', color: '#333', marginBottom: '6px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.name}</div>
                <div>
                  <span style={{ fontSize: '16px', fontWeight: 700, color: '#FF6B6B' }}>{p.price}</span>
                  <span style={{ fontSize: '11px', color: '#bbb', textDecoration: 'line-through', marginLeft: '6px' }}>{p.old}</span>
                </div>
              </div>
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
          { icon: '🏠', label: '首页', path: '/home', active: true },
          { icon: '🔍', label: '发现', path: '/home', active: false },
          { icon: '🛒', label: '购物车', path: '/cart', active: false },
          { icon: '👤', label: '我的', path: '/profile', active: false },
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
