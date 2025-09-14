import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { Loader } from "../components/loader";
import ImageSlider from "../components/imageSlider";

export default function ProductOverview() {
   
    const params = useParams()
    
    //laoding, success, error
	const [status, setStatus] = useState("loading");
	const [product, setProduct] = useState(null);

    useEffect(()=>{

        axios.get(import.meta.env.VITE_API_URL + "/api/products/" + params.id)
            .then((res) => {
                setProduct(res.data);
                setStatus("success");
            })
            .catch(
                ()=>{
                    toast.error("Error fetching product data");
                    setStatus("error");
                }
            )
            

    }
    ,[])

    return (
        <div className="w-full h-[calc(100vh-100px)] text-secondary">
           {
           status == "loading" && <Loader />
           }

           {
           status == "success" && (<div className="w-full h-full flex justify-center items-center">
            <div className="w-[50%] h-full">
                <ImageSlider images={product.images}/>
            </div>
            <div className="w-[50%] h-full flex flex-col  items-center gap-4 p-10">
                <span className="text-sm font-normal text-secondary/70">{product.category}</span>
                <h1 className="text-2xl font-bold text-center">{product.id}
                    {
                        product.altNames.map(
                            (name,index )=>{
                                return(
                                <span key={index} className="text-sm font-normal text-secondary/70">{" | "+name}</span>
                                )
                            }
                        )
                    }
                </h1>
            {/*description*/}
            <p className="mt-[30px]text-justify">{product.description}</p>
            <div className="w-full h-[50px]">
            <span className="rounded-full w-[100px] min-w[100px] h-[30px] border-[2px] text-center border-secondary">{product.category}</span>
            </div>
            </div>
        </div>)
           
           }

           {
           status == "error" && <h1 className="text-red-500">Error fetching product data</h1>
           }
        </div>
    );
}
