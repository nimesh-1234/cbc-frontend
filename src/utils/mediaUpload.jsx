import { createClient } from "@supabase/supabase-js";

const anonKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhvZWt5ZHF1em9pd2V4dWxjdmNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYzNzkyNTAsImV4cCI6MjA3MTk1NTI1MH0.Ga_jVB2HW4hFUgjISBG-kQhU1bgGpEtoJcGYwVfU3Yw";
const supabaseUrl = "https://hoekydquzoiwexulcvcg.supabase.co";

const supabase = createClient(supabaseUrl, anonKey);


export default function mediaUpload(file) {
	return new Promise((resolve, reject) => {
		if (file == null) {
			reject("No file selected");
		} else {
            const timestamp = new Date().getTime();
            const fileName = timestamp+file.name

			supabase.storage
				.from("images")
				.upload(fileName, file, {
					upsert: false,
					cacheControl: "3600",
				})
				.then(() => {
					const publicUrl = supabase.storage
						.from("images")
						.getPublicUrl(fileName).data.publicUrl;

					resolve(publicUrl);
				}).catch(
                    ()=>{
                        reject("An error occured")
                    }
                )
		}
	});
}