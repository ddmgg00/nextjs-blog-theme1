// pages/admin.js

import { useEffect } from 'react';
import { useRouter } from 'next/router';

const AdminPage = () => {
  const router = useRouter();

  useEffect(() => {
    // 当页面加载完成时，手动导航到 Netlify CMS 管理界面
    router.push('/admin');
  }, []);

  return (
    <div>
      {/* 在页面加载时可以显示加载中的提示，或者留空 */}
    </div>
  );
};

export default AdminPage;
