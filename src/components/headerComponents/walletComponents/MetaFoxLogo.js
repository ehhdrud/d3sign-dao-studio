import { useEffect, useRef } from 'react';
import MetaFox from '@metamask/logo';

const MetaFoxLogo = () => {
    const metaFox = useRef(null);
    const metaFoxOn = useRef(false);
    const metaFoxRef = useRef(null);

    useEffect(() => {
        if (window.document !== null && window.document !== undefined && !metaFoxOn.current) {
            metaFox.current = MetaFox({
                pxNotRatio: true,
                width: 42.5,
                height: 42.5,
                followMouse: true,
            });

            const divMetaFox = metaFoxRef.current;

            if (divMetaFox) {
                divMetaFox.appendChild(metaFox.current.container);
            }

            metaFoxOn.current = true;
        }

        return () => {
            delete metaFox.current;
        };
    }, []);

    return <div ref={metaFoxRef} className="metafox" />;
};

export default MetaFoxLogo;
