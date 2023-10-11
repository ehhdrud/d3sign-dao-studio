import { useEffect, useRef } from 'react';
import MetaFox from '@metamask/logo';

const MetaFoxLogo = () => {
    const metaFoxRef = useRef(null);
    const isMetaFoxOn = useRef(false);

    useEffect(() => {
        let metaFoxRefCurrent = metaFoxRef.current;

        if (window.document && !isMetaFoxOn.current) {
            const metaFoxInstance = MetaFox({
                pxNotRatio: true,
                width: 42.5,
                height: 42.5,
                followMouse: true,
            });

            const divMetaFox = metaFoxRefCurrent;

            if (divMetaFox) {
                divMetaFox.appendChild(metaFoxInstance.container);
            }

            isMetaFoxOn.current = true;
        }

        return () => {
            metaFoxRefCurrent = null;
        };
    }, []);

    return <div ref={metaFoxRef} />;
};

export default MetaFoxLogo;
