import React, { useState } from 'react';
import { Button } from "../en-components/button/Button";
import { Wrapper } from "./rectangle/Wrapper";

export const WrappButton = () => {
    const [isRectangleVisible, setIsRectangleVisible] = useState(false);

    const handleToggleRectangle = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        setIsRectangleVisible(!isRectangleVisible);
    };

    return (
        <>
            <Button onClick={handleToggleRectangle}/>
            <Wrapper
                isVisible={isRectangleVisible}
                toggleVisibility={() => setIsRectangleVisible(false)}
            />
        </>
    );
};





