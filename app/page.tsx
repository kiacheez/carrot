import Link from "next/link";


// control + space는 오토 컴플리트를 보여줌
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-6">
      <div className="my-auto flex flex-col items-center *:font-medium">
        <span className="text-9xl">carrot</span>
        <h1 className="text-4xl">당근</h1>
        <h2 className="text-2xl ">당근마켓</h2>
      </div>
      <div className="flex flex-col w-full items-center gap-4">
        <Link
          href="/create-account"
          className="primary-btn py-2 text-lg"
        >
          시작하기
        </Link>
        <div className="flex gap-2">
          <span>이미 계정이 있으신가요?</span>
          <Link href="/login" className="hover:underline-offset-2">로그인</Link>
        </div>
      </div>
    </div>
  );
}
