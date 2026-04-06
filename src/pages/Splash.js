import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Splash() {
  const navigate = useNavigate();
  useEffect(() => {
    const t = setTimeout(() => navigate('/login'), 2500);
    return () => clearTimeout(t);
  }, [navigate]);

  return (
    <div style={{
      width: '375px', height: '812px', overflow: 'hidden',
      background: 'linear-gradient(145deg, #FF6B6B, #FF8E53, #FFC947)',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      position: 'relative'
    }}>
      <div style={{
        position: 'absolute', width: '300px', height: '300px', borderRadius: '50%',
        background: 'rgba(255,255,255,0.1)', top: '-80px', right: '-80px'
      }} />
      <div style={{
        position: 'absolute', width: '200px', height: '200px', borderRadius: '50%',
        background: 'rgba(255,255,255,0.08)', bottom: '-50px', left: '-50px'
      }} />
      <div style={{ textAlign: 'center', zIndex: 2 }}>
        <div style={{
          width: '100px', height: '100px', background: '#fff', borderRadius: '28px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '52px', margin: '0 auto 24px', boxShadow: '0 12px 40px rgba(0,0,0,0.15)'
        }}>🛍️</div>
        <div style={{ fontSize: '36px', fontWeight: 800, color: '#fff', letterSpacing: '3px', marginBottom: '8px' }}>ShopJoy</div>
        <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.85)', letterSpacing: '2px' }}>快乐购物，每一天</div>
      </div>
      <div style={{ position: 'absolute', bottom: '80px', textAlign: 'center' }}>
        <div style={{
          width: '160px', height: '4px', background: 'rgba(255,255,255,0.3)',
          borderRadius: '2px', overflow: 'hidden', margin: '0 auto 12px'
        }}>
          <div style={{ width: '70%', height: '100%', background: '#fff', borderRadius: '2px' }} />
        </div>
        <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)' }}>正在加载...</div>
      </div>
    </div>
  );
}
