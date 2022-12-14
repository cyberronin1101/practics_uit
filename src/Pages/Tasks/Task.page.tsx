import { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetTask, usePutTask } from "../../hooks/api/tasks.api.hooks";
import { Loading } from "../../Components/_UI/Loading/Loading";
import { TaskForm } from "../../Components/TaskForm/Task.form";
import { Update } from "../../Components/_UI/Update/Update";
import { ShowError } from "../../Components/_UI/ShowError/ShowError";
import { TaskType } from "../../models/task.type";
import { TaskHeader } from "./Tasks.page.styled";
import Button from "../../Components/_UI/Button/Button";

export const TaskPage: FC = () => {
  const { taskId } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, isFetching, isError, error } = useGetTask(
    taskId as string
  );

  const {
    mutate,
    isLoading: putIsLoading,
    isError: putIsError,
    error: putError,
  } = usePutTask();

  if (isLoading) {
    return <Loading />;
  }

  const task = data;

  const onSubmit = (data: TaskType) => {
    mutate(data);
  };

  return (
    <div>
      <TaskHeader>
        <Button onClick={() => navigate(-1)}>{`<`} Tasks</Button>

        <div>
          <Update isUpdate={isFetching} />
        </div>
      </TaskHeader>

      <ShowError isError={isError} error={error} />
      {task && (
        <>
          <h3>{task.title}</h3>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
            corporis delectus, dolore doloremque dolores ea earum enim facilis,
            harum ipsam nostrum optio quaerat quidem quis sapiente temporibus
            unde velit, voluptatem.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
            dignissimos dolores ducimus eligendi maiores nemo vitae,
            voluptatibus! Commodi cumque excepturi laboriosam laborum modi
            necessitatibus nemo officiis, provident quaerat temporibus vitae?
          </p>

          <ShowError isError={putIsError} error={putError} />

          <TaskForm
            onSubmit={onSubmit}
            submitText={putIsLoading ? "loading" : "update"}
            isLoading={putIsLoading}
            initValue={task}
          />
        </>
      )}
    </div>
  );
};
