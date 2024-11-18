import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, User } from "lucide-react";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import { fetcher } from "../../../utils/api";
import axios from "axios";
const initialComments = [
  {
    id: "c1",
    name: "Alex Thompson",
    email: "t@g",
    review: "2024-03-10",
  },
 
];

export default function CommentSection() {
  const [comments, setComments] = useState(initialComments);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { data } = useSWR(
    `${process.env.NEXT_PUBLIC_URL}/api/reviews`,
    fetcher
  );

  const onSubmit =  async (data) => {
  
  
  try {
      const newComment = {
        name: data.name,
        email:data.email,
        review: data.review,
      };
      //  if(newComment){
        const res =  await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/reviews`, {data:{
          name: data.name,
          email:data.email,
          review: data.review,
        }})
        console.log("🚀 ~ onSubmit ~ res:", res)

      //  }

      setComments([newComment, ...comments]);
      reset();
      // alert("Thank you")

   } catch (error) {
    console.log("🚀 ~ onSubmit ~ error:", error)
    // alert("Try again")
   }

  
   
  
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
            <MessageCircle className="w-6 h-6" />
            Reviews ({data?.data?.length})
          </h3>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white rounded-xl shadow-md p-6 mb-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  {...register("name", { required: "Name is required" })}
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  type="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="review"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Review
              </label>
              <textarea
                {...register("review", { required: "Review is required" })}
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {errors.comment && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.comment.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-[#ba9b0e] hover:bg-[#000] text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
            >
              Post Review
            </button>
          </form>

          <div className="space-y-6">
            {data?.data?.map((comment, index) => (
              <motion.div
                key={comment.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-gray-100 rounded-full p-2 mr-3">
                    <User className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {comment?.attributes?.name}
                    </h4>
                    <p className="text-sm text-gray-500">{ Date(comment.attributes.publishedAt).toLocaleString()}</p>
                  </div>
                </div>
                <p className="text-gray-600">{comment?.attributes?.review}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
                
}
