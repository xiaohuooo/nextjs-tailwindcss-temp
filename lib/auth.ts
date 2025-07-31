import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        username: { label: '用户名', type: 'text', placeholder: '输入任意用户名' },
        password: { label: '密码', type: 'password', placeholder: '输入任意密码' }
      },
      async authorize(credentials) {
        // 简化的认证逻辑，任何用户名和密码都可以登录
        if (credentials?.username && credentials?.password) {
          return {
            id: '1',
            name: credentials.username,
            email: `${credentials.username}@example.com`,
            image: '/placeholder-user.jpg'
          };
        }
        return null;
      }
    })
  ],
  pages: {
    signIn: '/login'
  }
});
