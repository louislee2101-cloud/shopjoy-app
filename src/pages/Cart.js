import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const navigate = useNavigate();
  const [items, setItems] = useState([
    { id: 1, name: '夏季清新连衣裙', spec: '颜色：红色 · 尺码：S', price: 199, qty: 1, emoji: '👗', bg: '#FFF0F0' },
    { id: 2, name: '轻便运动跑鞋', spec: '颜色：白色 · 尺码：38', price: 399, qty: 2, emoji: '👟', bg: '#FFF5E0' },
  ]);

  const updateQty = (id, delta) => {
    setItems(items.map(item => item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item));
  };

  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div style={{ width: '375px', height: '812px', overflow: 'hidden', background: '#f5f5f5', position: 'relative' }}>
      {/* 顶部 */}
      <div style={{
        background: '#fff', padding: '48px 20px 16px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        borderBottom: '1px solid #f0f0f0'
      }}>
        <div style={{ fontSize: '20px', fontWeight: 700, color: '#222' }}>购物车 🛒</div>
        <div style={{ fontSize: '14px', color: '#FF6B6B' }}>编辑</div>
      </div>

      {/* 内容 */}
      <div style={{ height: '672px', overflowY: 'auto', padding: '12px 16px', paddingBottom: '80px' }}>
        <div style={{ background: '#fff', borderRadius: '16px', padding: '16px', marginBottom: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
            <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#FF6B6B', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '12px' }}>✓</div>
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#333' }}>🏪 ShopJoy 官方旗舰店</div>
          </div>
          {items.map(item => (
            <div key={item.id} style={{ display: 'flex', gap: '12px', marginBottom: '14px' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '12px', background: item.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '40px', flexShrink: 0 }}>{item.emoji}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '14px', color: '#333', marginBottom: '4px' }}>{item.name}</div>
                <div style={{ fontSize: '12px', color: '#999', marginBottom: '8px' }}>{item.spec}</div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ fontSize: '16px', fontWeight: 700, color: '#FF6B6B' }}>¥{item.price}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div onClick={() => updateQty(item.id, -1)} style={{ width: '26px', height: '26px', borderRadius: '50%', border: '1.5px solid #eee', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '16px', color: '#555' }}>−</div>
                    <div style={{ fontSize: '15px', fontWeight: 600, color: '#333' }}>{item.qty}</div>
                    <div onClick={() => updateQty(item.id, 1)} style={{ width: '26px', height: '26px', borderRadius: '50%', border: '1.5px solid #eee', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '16px', color: '#555' }}>+</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 推荐 */}
        <div style={{ fontSize: '15px', fontWeight: 700, color: '#222', margin: '8px 0 12px' }}>猜你喜欢</div>
        <div style={{ display: 'flex', gap: '10px', overflowX: 'auto' }}>
          {[{ e: '🏠', n: '北欧风台灯', p: '¥89', bg: '#F0FFF4' }, { e: '💄', n: '口红套装', p: '¥159', bg: '#FFF0FA' }, { e: '📱', n: '手机支架', p: '¥29', bg: '#F0F7FF' }].map(r => (
            <div key={r.n} style={{ minWidth: '100px', background: '#fff', borderRadius: '12px', overflow: 'hidden', flexShrink: 0 }}>
              <div style={{ height: '80px', background: r.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '36px' }}>{r.e}</div>
              <div style={{ padding: '6px 8px' }}>
                <div style={{ fontSize: '11px', color: '#333', marginBottom: '2px' }}>{r.n}</div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#FF6B6B' }}>{r.p}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 底部结算 */}
      <div style={{
        position: 'absolute', bottom: 0, width: '375px', background: '#fff',
        padding: '12px 20px 24px', display: 'flex', alignItems: 'center',
        borderTop: '1px solid #f0f0f0'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginRight: 'auto' }}>
          <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#FF6B6B', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '12px' }}>✓</div>
          <div style={{ fontSize: '14px', color: '#333' }}>全选</div>
        </div>
        <div style={{ marginRight: '16px' }}>
          <div style={{ fontSize: '12px', color: '#999' }}>合计</div>
          <div style={{ fontSize: '20px', fontWeight: 800, color: '#FF6B6B' }}>¥{total}</div>
        </div>
        <button onClick={() => navigate('/home')} style={{
          background: 'linear-gradient(90deg, #FF6B6B, #FF8E53)',
          color: '#fff', fontSize: '15px', fontWeight: 700,
          padding: '12px 24px', borderRadius: '24px', border: 'none', cursor: 'pointer',
          boxShadow: '0 6px 20px rgba(255,107,107,0.4)'
        }}>结算({items.length})</button>
      </div>
    </div>
  );
}
