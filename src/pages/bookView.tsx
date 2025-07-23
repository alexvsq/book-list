import { useParams } from "react-router";
import { getBookById } from "../api/api";
import { useQuery } from "@tanstack/react-query";
import { Star, Users, BookOpen, Library, BookmarkCheck } from "lucide-react";
import { SkeletonBookSelected } from '../components/skeletons/ContentBooksSkeleton'
import { useReadingList } from '../hooks/useReadingList'

export default function BookView() {
  const { bookSelected } = useParams();
  const { addToList, removeFromList, readingList } = useReadingList();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["bookView: " + bookSelected],
    queryFn: () => getBookById(bookSelected),
  });

  const isInReadingList = readingList.find((book) => book.id === data?.id);

  if (isError) {
    console.log(error);
    return <div>Something went wrong</div>;
  }
  if (isLoading || !data) {
    return (
      <div className="grid md:grid-cols-3 gap-6 container-principal h-full pt-16">
        <div className="col-span-1 h-full sticky top-0">
          <div className=" aspect-[2/3]  my-3 shadow-xl rounded-lg overflow-hidden">
            <SkeletonBookSelected />
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="grid md:grid-cols-3 gap-6 container-principal h-full pt-16">
      <div className="md:col-span-1 h-full">
        <div className=" aspect-[2/3] max-w-sm mx-auto overflow-hidden my-3 shadow-xl rounded-lg">
          <img
            src={data?.volumeInfo.imageLinks?.thumbnail}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        {
          isInReadingList ? (
            <button
              onClick={() => removeFromList(data?.id)}
              className="bg-sky-600 text-white rounded-lg flex justify-center items-center py-3 w-full gap-4 cursor-pointer">
              <BookmarkCheck /> <p>Remove from Reading List</p>
            </button>
          ) : <button
            onClick={() => addToList(data)}
            className="bg-bg-secodary dark:bg-bg-secodary-dark rounded-lg flex justify-center items-center py-3 w-full gap-4 cursor-pointer">
            <Library /> <p>Add to Reading List</p>
          </button>
        }

      </div>

      <div className="md:col-span-2 h-full py-8">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight font-headline">
          {data?.volumeInfo.title}
        </h1>
        <p className="text-lg text-sky-500 mt-2">
          {data?.volumeInfo.authors?.[0]}
        </p>
        <div className="flex flex-wrap items-center gap-4 text-sm">
          {data?.volumeInfo.averageRating && (
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span className="font-bold">
                {data?.volumeInfo.averageRating.toFixed(1)}
              </span>
            </div>
          )}
          {data?.volumeInfo.ratingsCount && (
            <div className="flex items-center gap-1 text-muted-foreground">
              <Users className="w-4 h-4" />
              <span>
                {data?.volumeInfo.ratingsCount.toLocaleString()} ratings
              </span>
            </div>
          )}
        </div>

        <div className="h-[1px] w-full bg-border dark:bg-border-dark my-6" />

        <h2 className="text-xl font-semibold my-2">Summary</h2>
        <p>{data?.volumeInfo.description}</p>

        <div className="h-[1px] w-full bg-border dark:bg-border-dark my-6" />

        <h2 className="text-xl font-semibold my-2">Genres</h2>
        <div className="flex gap-2 flex-wrap">
          {data?.volumeInfo.categories?.map((category, index) => (
            <p
              key={index}
              className="bg-bg-secodary dark:bg-bg-secodary-dark text-sm py-1 px-2 rounded-full"
            >
              {category}
            </p>
          ))}
        </div>
        <div className="h-[1px] w-full bg-border dark:bg-border-dark my-6" />

        <h2 className="text-xl font-semibold my-2">Book Details</h2>
        <div className="grid grid-cols-2 gap-x-4 gap-y-6">
          {renderInfoItem(BookOpen, 'Pages', data?.volumeInfo.pageCount)}
          {renderInfoItem(BookOpen, 'Published', data?.volumeInfo.publishedDate)}
          {renderInfoItem(BookOpen, 'Publisher', data?.volumeInfo.publisher)}
        </div>
      </div>
    </div>
  );
}

const renderInfoItem = (
  Icon: React.ElementType,
  label: string,
  value: string | number | undefined
) =>
  value ? (
    <div className="flex items-center gap-3">
      <Icon className="h-5 w-5 text-muted-foreground" />
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  ) : null;