import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY);

function Product() {
    const [fields, setFields] = useState([]);

    useEffect(() => {
        getFields();
    }, []);

    async function getFields() {
        const { data } = await supabase.from("instruments").select();
        setFields(data);
    }

    return(
        <div>
            {/*IDPROD*/}

        </div>
    )
}

export default Product