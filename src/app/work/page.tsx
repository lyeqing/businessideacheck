import React, { Suspense } from 'react';
import Footer from '../components/footer';
import { setTimeout } from 'timers/promises';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
let count = 0;
async function add() {
  count = count + 1;
  //await new Promise((resolve) => setTimeout(2000));
}
const ggdd = async () => {
  const dd = await prisma.user.create({ data: { email: 'w2@w.com', password: '1111', created_at: Date.now.toString() } });
  const allUsers = await prisma.user.findMany();
  console.log(allUsers);
  count = count + 1;
  //await new Promise((resolve) => setTimeout(2000));
  return count;
};
const page = async (add: () => void) => {
  const dd = await ggdd();
  return (
    <div>
      <Suspense fallback={<div>B...............</div>}>
        <div>page</div>
      </Suspense>
      <Suspense fallback={<div>C...............</div>}>
        <div>{dd}</div>
      </Suspense>
      <Footer />
    </div>
  );
};

export default page;
