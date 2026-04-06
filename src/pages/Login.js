import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  return (
    <div style={{ width: '375px', height: '812px', overflow: 'hidden', background: '#fff', fontFamily: 'PingFang SC, Microsoft YaHei, sans-serif' }}>
      <div style={{
        width: '100%', height: '280px',
        background: 'linear-gradient(145deg, #FF6B6B, #FF8E53)',
        borderRadius: '0 0 50px 50px',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        position: 'relative', overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', width: '180px', height: '180px', borderRadius: '50%',
          background: 'rgba(255,255,255,0.1)', top: '-40px', right: '-40px'
        }} />
        <div style={{ fontSize: '48px', marginBottom: '12px' }}>🛍️</div>
        <div style={{ fontSize: '26px', fontWeight: 800, color: '#fff' }}>ShopJoy</div>
        <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.85)', marginTop: '4px' }}>欢迎回来！</div>
      </div>

      <div style={{ padding: '36px 28px 0' }}>
        <div style={{ fontSize: '22px', fontWeight: 700, color: '#222', marginBottom: '6px' }}>登录账号</div>
        <div style={{ fontSize: '13px', color: '#999', marginBottom: '28px' }}>请输入您的账号和密码</div>

        <div style={{ marginBottom: '18px' }}>
          <div style={{ fontSize: '13px', color: '#555', marginBottom: '8px' }}>手机号 / 邮箱</div>
          <input placeholder="请输入手机号或邮箱" style={{
            width: '100%', height: '50px', background: '#f7f7f7',
            border: '2px solid transparent', borderRadius: '14px',
            padding: '0 16px', fontSize: '15px', outline: 'none'
          }} />
        </div>
        <div style={{ marginBottom: '8px' }}>
          <div style={{ fontSize: '13px', color: '#555', marginBottom: '8px' }}>密码</div>
          <input type="password" placeholder="请输入密码" style={{
            width: '100%', height: '50px', background: '#f7f7f7',
            border: '2px solid transparent', borderRadius: '14px',
            padding: '0 16px', fontSize: '15px', outline: 'none'
          }} />
        </div>
        <div style={{ textAlign: 'right', fontSize: '13px', color: '#FF6B6B', marginBottom: '28px' }}>忘记密码？</div>

        <button onClick={() => navigate('/home')} style={{
          width: '100%', height: '52px',
          background: 'linear-gradient(90deg, #FF6B6B, #FF8E53)',
          border: 'none', borderRadius: '26px', color: '#fff',
          fontSize: '17px', fontWeight: 700, cursor: 'pointer',
          boxShadow: '0 8px 24px rgba(255,107,107,0.4)', marginBottom: '24px'
        }}>立即登录</button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
          <div style={{ flex: 1, height: '1px', background: '#eee' }} />
          <div style={{ fontSize: '12px', color: '#bbb' }}>其他方式登录</div>
          <div style={{ flex: 1, height: '1px', background: '#eee' }} />
        </div>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginBottom: '28px' }}>
          {['💬', '📱', '🍎'].map(icon => (
            <div key={icon} style={{
              width: '52px', height: '52px', borderRadius: '50%',
              border: '1.5px solid #eee', display: 'flex',
              alignItems: 'center', justifyContent: 'center', fontSize: '24px'
            }}>{icon}</div>
          ))}
        </div>
        <div style={{ textAlign: 'center', fontSize: '13px', color: '#999' }}>
          还没有账号？<span style={{ color: '#FF6B6B', fontWeight: 600 }}>立即注册</span>
        </div>
      </div>
    </div>
  );
}
