import { LinkButton } from '@/components/elements/button/Button';
import MotionWrapper from '@/lib/framerMotion/MotionWrapper';

type ObjectProps = {
  word: string;
  posters: { posterId: string }[];
};

async function fetchData() {
  const res = await fetch('http://localhost:8000/api/poster/objects');
  const data = await res.json();
  const objects: ObjectProps[] = data.objects;
  return objects;
}

export default async function ObjectPage() {
  const objects = await fetchData();

  return (
    <MotionWrapper>
      <main className='container mx-auto mt-8 flex justify-center'>
        <div className='flex flex-col'>
          <p className='mb-6 text-center text-lg font-semibold'>物体名一覧</p>
          <div className='flex flex-wrap justify-normal gap-1'>
            {objects.map((object) => (
              <LinkButton
                key={object.word}
                inText={object.word}
                intent='third'
                size='fit'
                href={`/objects/objectWord?word=${object.word}`}
              />
            ))}
          </div>
        </div>
      </main>
    </MotionWrapper>
  );
}
