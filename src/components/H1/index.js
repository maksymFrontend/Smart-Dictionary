import { memo } from "react";

export const H1 = memo(({text, className}) => {

    return(
        <div className={`workspaceH1 ${className}`}>
            <h1>
                {text}
            </h1>
            <div />
        </div>

    )
})