import { execSync } from 'child_process';

const cwd = '/vercel/share/v0-project';

try {
  execSync('git add frontend/src/views/sell/home/index.vue', { cwd, stdio: 'inherit' });
  execSync('git commit -m "feat: 补齐 home 页面各区域缺失的 SVG 图标"', { cwd, stdio: 'inherit' });
  execSync('git push origin v0/zengxianrui-7583-9b598d00', { cwd, stdio: 'inherit' });
  console.log('Commit and push successful!');
} catch (e) {
  console.error('Error:', e.message);
}
