import { memo } from "react";

export const H2 = memo(({text, className}) => {

    return(
        <div className={`workspaceH2 ${className}`}>
            <h2>
                {text}
            </h2>
            <div />
        </div>

    )
})