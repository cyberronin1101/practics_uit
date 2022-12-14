import {FC} from 'react';
import { useGetFilm } from "../../hooks/api/films.api.hooks";
import { Loading } from "../../Components/_UI/Loading/Loading";
import { Update } from "../../Components/_UI/Update/Update";
import {useParams} from 'react-router-dom';
import {ShowError} from '../../Components/_UI/ShowError/ShowError';

export const FilmPage: FC = () => {
  const { filmId } = useParams();

  const { data: film, isLoading, isFetching, isError, error } = useGetFilm(filmId as string);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <ShowError isError={isError} error={error} />
      {film && (
        <>
          <h3>{film.title}</h3>
          <p>{film.opening_crawl}</p>
          <Update isUpdate={isFetching} />
        </>
      )}

    </div>
  );
};