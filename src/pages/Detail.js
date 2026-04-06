import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Detail() {
  const navigate = useNavigate();
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(1);
  const colors = ['#FF6B6B', '#FFC947', '#6BD5FF', '#B8FF6B'];
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  return (
    <div style={{ width: '375px', height: '812px', overflow: 'hidden', background: '#f5f5f5', position: 'relative' }}>
      {/* 商品图 */}
      <div style={{
        width: '375px', height: '340px',
        background: 'linear-gradient(145deg, #FFF0F0, #FFE4E4)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '140px', position: 'relative'
      }}>
        👗
        <div onClick={() => navigate('/home')} style={{
          position: 'absolute', top: '48px', left: '16px',
          width: '36px', height: '36px', background: 'rgba(255,255,255,0.9)',
          borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '18px', cursor: 'pointer'
        }}>←</div>
        <div style={{
          position: 'absolute', bottom: '16px', display: 'flex', gap: '6px'
        }}>
          {[0,1,2,3].map(i => (
            <div key={i} style={{
              width: i === 0 ? '18px' : '6px', height: '6px',
              borderRadius: i === 0 ? '3px' : '50%',
              background: i === 0 ? '#FF6B6B' : 'rgba(255,107,107,0.3)'
            }} />
          ))}
        </div>
      </div>

      {/* 信息卡片 */}
      <div style={{
        background: '#fff', borderRadius: '24px 24px 0 0',
        marginTop: '-20px', padding: '24px 20px 100px',
        position: 'relative', zIndex: 2, height: '492px', overflowY: 'auto'
      }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '10px' }}>
          <span style={{ fontSize: '28px', fontWeight: 800, color: '#FF6B6B' }}>¥199</span>
          <span style={{ fontSize: '14px', color: '#bbb', textDecoration: 'line-through' }}>¥399</span>
          <span style={{ background: '#FFF0F0', color: '#FF6B6B', fontSize: '11px', padding: '3px 8px', borderRadius: '8px', marginLeft: 'auto' }}>5折优惠</span>
        </div>
        <div style={{ fontSize: '18px', fontWeight: 700, color: '#222', marginBottom: '6px' }}>夏季清新连衣裙</div>
        <div style={{ fontSize: '13px', color: '#999', marginBottom: '16px' }}>轻薄透气 · 多色可选 · 显瘦版型</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
          <span style={{ color: '#FFC947', fontSize: '14px' }}>★★★★★</span>
          <span style={{ fontSize: '13px', color: '#555' }}>4.9分</span>
          <span style={{ fontSize: '12px', color: '#bbb', marginLeft: 'auto' }}>已售 3,241 件</span>
        </div>

        <div style={{ height: '1px', background: '#f5f5f5', margin: '16px 0' }} />

        <div style={{ fontSize: '14px', fontWeight: 600, color: '#333', marginBottom: '10px' }}>选择颜色</div>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '16px' }}>
          {colors.map((c, i) => (
            <div key={i} onClick={() => setSelectedColor(i)} style={{
              width: '28px', height: '28px', borderRadius: '50%', background: c,
              border: selectedColor === i ? '2px solid #FF6B6B' : '2px solid transparent',
              transform: selectedColor === i ? 'scale(1.1)' : 'scale(1)',
              cursor: 'pointer', transition: 'all 0.2s'
            }} />
          ))}
        </div>

        <div style={{ fontSize: '14px', fontWeight: 600, color: '#333', marginBottom: '10px' }}>选择尺码</div>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
          {sizes.map((s, i) => (
            <div key={i} onClick={() => setSelectedSize(i)} style={{
              padding: '6px 16px', borderRadius: '10px', fontSize: '13px', cursor: 'pointer',
              border: selectedSize === i ? '1.5px solid #FF6B6B' : '1.5px solid #eee',
              color: selectedSize === i ? '#FF6B6B' : '#555',
              background: selectedSize === i ? '#FFF0F0' : '#fff'
            }}>{s}</div>
          ))}
        </div>
      </div>

      {/* 底部按钮 */}
      <div style={{
        position: 'absolute', bottom: 0, width: '375px',
        background: '#fff', padding: '12px 20px 24px',
        display: 'flex', gap: '12px', borderTop: '1px solid #f0f0f0'
      }}>
        <button onClick={() => navigate('/cart')} style={{
          flex: 1, height: '50px', background: '#FFF0F0', border: 'none',
          borderRadius: '25px', color: '#FF6B6B', fontSize: '15px', fontWeight: 700, cursor: 'pointer'
        }}>🛒 加入购物车</button>
        <button onClick={() => navigate('/cart')} style={{
          flex: 2, height: '50px',
          background: 'linear-gradient(90deg, #FF6B6B, #FF8E53)',
          border: 'none', borderRadius: '25px', color: '#fff',
          fontSize: '15px', fontWeight: 700, cursor: 'pointer',
          boxShadow: '0 6px 20px rgba(255,107,107,0.4)'
        }}>立即购买</button>
      </div>
    </div>
  );
}
