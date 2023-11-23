import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { createRespondent, deleteRespondent, getRespondent, updateRespondent } from "../api/form.api";
import { toast } from "react-hot-toast";

export function RespondentFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (params.id) {
        await updateRespondent(params.id, data);
        toast.success("Respondent updated", {
          position: "bottom-right",
          style: {
            background: "#101010",
            color: "#fff",
          },
        });
      } else {
        await createRespondent(data);
        toast.success("New Respondent Added", {
          position: "bottom-right",
          style: {
            background: "#101010",
            color: "#fff",
          },
        });
      }

      navigate("/respondent");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred while submitting the form", {
        position: "bottom-right",
        style: {
          background: "#ff4d4f",
          color: "#fff",
        },
      });
    }
  });

  useEffect(() => {
    async function loadRespondent() {
      try {
        if (params.id) {
          const { data } = await getRespondent(params.id);
          setValue("name", data.title);
          setValue("form_number", data.form_number);
        }
      } catch (error) {
        console.error("Error loading respondent:", error);
        toast.error("An error occurred while loading respondent data", {
          position: "bottom-right",
          style: {
            background: "#ff4d4f",
            color: "#fff",
          },
        });
      }
    }
    loadRespondent();
  }, [params.id, setValue]);

  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={onSubmit} className="bg-zinc-800 p-10 rounded-lg mt-2">
        <input
          type="text"
          placeholder="Name"
          {...register("name", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
          autoFocus
        />

        {errors.name && <span>This field is required</span>}

        <textarea
          placeholder="Form number"
          {...register("form_number", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full"
        />

        {errors.form_number && <span>This field is required</span>}

        <button className="bg-indigo-500 p-3 rounded-lg block w-full mt-3">
          Save
        </button>
      </form>

      {params.id && (
        <div className="flex justify-end">
          <button
            className="bg-red-500 p-3 rounded-lg w-48 mt-3"
            onClick={async () => {
              const accepted = window.confirm("Are you sure?");
              if (accepted) {
                try {
                  await deleteRespondent(params.id);
                  toast.success("Respondent Removed", {
                    position: "bottom-right",
                    style: {
                      background: "#101010",
                      color: "#fff",
                    },
                  });
                  navigate("/respondent");
                } catch (error) {
                  console.error("Error deleting respondent:", error);
                  toast.error("An error occurred while deleting the respondent", {
                    position: "bottom-right",
                    style: {
                      background: "#ff4d4f",
                      color: "#fff",
                    },
                  });
                }
              }
            }}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
