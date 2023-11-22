import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { createRespondent, deleteRespondent, getRespondent, updateRespondent } from "../api/respondent.api";
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
    });
 
    useEffect(() => {
        async function loadRespondent() {
        if (params.id) {
            const { data } = await getRespondent(params.id);
            setValue("name", data.title);
            setValue("form_number", data.Form_number);
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
 
            {errors.title && <span>This field is required</span>}
 
            <textarea
            placeholder="Form number"
            {...register("form_number", { required: true })}
            className="bg-zinc-700 p-3 rounded-lg block w-full"
            />
 
            {errors.Form_number && <span>This field is required</span>}
 
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
                    await deleteRespondent(params.id);
                    toast.success("Respuesta Removed", {
                    position: "bottom-right",
                    style: {
                        background: "#101010",
                        color: "#fff",
                    },
                    });
                    navigate("/tasks");
                }
                }}
            >
                delete
            </button>
            </div>
        )}
        </div>
    );
    }