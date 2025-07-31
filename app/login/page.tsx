'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { login } from './actions';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen flex justify-center items-start md:items-center p-8">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">登录</CardTitle>
          <CardDescription>
            使用任意用户名和密码登录系统。
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <label htmlFor="username">用户名</label>
              <Input 
                id="username" 
                placeholder="输入任意用户名" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="password">密码</label>
              <Input 
                id="password" 
                type="password" 
                placeholder="输入任意密码" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <form
            action={() => login(username, password)}
            className="w-full"
          >
            <input type="hidden" name="username" value={username} />
            <input type="hidden" name="password" value={password} />
            <Button className="w-full" type="submit">登录</Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}
