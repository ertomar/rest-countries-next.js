import Image from 'next/image';

export default function Loading() {
  return (
    <div className="loading-container">
      <Image
        src="/loading.svg"
        alt="loading"
        height={100}
        width={100}
        priority={true}
      />
    </div>
  );
}
