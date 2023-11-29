import { AddIcon, Button, Input } from "..";
import { useAdd } from "@/hooks";

type AddFormProps = {
  close: () => void;
};

const AddForm = ({ close }: AddFormProps) => {
  const { handleAddTodo, descState } = useAdd({ callback: close });

  return (
    <form
      onSubmit={handleAddTodo}
      className="w-full flex gap-2 items-center justify-between"
    >
      <Input
        label=""
        placeholder="Description*"
        name="description"
        stateHandler={descState}
      />

      <Button
        disabled={descState?.value?.length == 0}
        className="bg-green-400 mr-2 hover:bg-green-600"
        type="submit"
      >
        <AddIcon />
      </Button>
    </form>
  );
};

export default AddForm;
