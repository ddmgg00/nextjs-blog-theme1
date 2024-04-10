import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Admin() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/admin'); // 重定向到 /admin
  }, []);

  return null; // 这个页面不需要任何内容，直接进行重定向即可
}
