import { useEffect, useState } from "react"

export const useKnowOS = () => {
    const [os, setOS] = useState("");

    useEffect(() => {
        const check = () => {
            if (navigator.userAgent.indexOf("Windows") > 0) setOS("Windows")
            if (navigator.userAgent.indexOf("Macintosh") > 0) setOS("Mac")
            if (navigator.userAgent.indexOf("Linux") > 0) setOS("Linux")
            // if (navigator.userAgent.indexOf("Android") > 0) setOS("Android")
            // if (navigator.userAgent.indexOf("iPhone") > 0) setOS("iOS")
        }
        return check()
    }, [])
    return { os }
        
}