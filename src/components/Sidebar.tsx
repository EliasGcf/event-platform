import { useGetLessonsQuery } from '../graphql/generated';
import { useSidebar } from '../store/sidebar-store';
import { Lesson } from './Lesson';
import classNames from 'classnames';

export function Sidebar() {
  const showSidebar = useSidebar((state) => state.show);

  const { data } = useGetLessonsQuery();

  return (
    <aside
      className={classNames(
        'bg-gray-700 p-6 border-l border-gray-600 xl:w-[348px] xl:block',
        {
          'w-[348px] block absolute bottom-0 top-0 right-0 z-10': showSidebar,
          'hidden w-0': !showSidebar,
        },
      )}
    >
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronogramas das aulas
      </span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map((lesson) => {
          return (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
            />
          );
        })}
      </div>
    </aside>
  );
}
