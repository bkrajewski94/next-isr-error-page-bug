async function getData() {
  const res = await fetch("https://api.example.com/...");

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page({ slug }: any) {
  const data = await getData();

  return (
    <main>
      <div>{slug}</div>
      <div>{JSON.stringify(data)}</div>
    </main>
  );
}

// error.tsx is rendered when:
// export const dynamic = "force-dynamic";

// inbuilt NextJS error page is rendered instead of error.tsx when:
export function generateStaticParams() {
  return [];
}
