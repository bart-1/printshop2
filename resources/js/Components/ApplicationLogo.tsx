import React from "react";

export type ApplicationLogoType = {
    className: string;
    fillColor?: string;
    height?: number;
    width?: number;
};

export default function ApplicationLogo({
    className,
    fillColor = "black",
    height = 38,
    width = 90,
}: ApplicationLogoType) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 90 38"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <g>
                <path
                    style={{ fill: fillColor }}
                    d="M 19.103516,0 A 19.103794,18.999977 0 0 0 0,19 19.103794,18.999977 0 0 0 19.103516,38 19.103794,18.999977 0 0 0 38.017578,21.660156 c -0.123274,0.542238 -0.284824,1.067457 -0.488281,1.572266 -0.519162,1.28846 -1.253037,2.397882 -2.199219,3.324219 -0.945838,0.926337 -2.084526,1.650747 -3.414062,2.171875 -1.329193,0.521129 -2.805377,0.78125 -4.425782,0.78125 h -8.121093 v -7.552735 a 9.8864288,9.832715 0 0 1 -9.416016,6.875 A 9.8864288,9.832715 0 0 1 0.06640625,19 9.8864288,9.832715 0 0 1 9.953125,9.1679688 9.8864288,9.832715 0 0 1 19.369141,16.011719 V 8.5058594 h 8.121093 c 1.620405,0 3.096589,0.2601212 4.425782,0.78125 1.329536,0.5211287 2.468224,1.2446576 3.414062,2.1757816 0.946182,0.931466 1.680057,2.040546 2.199219,3.324218 0.204473,0.505443 0.366746,1.031264 0.490234,1.574219 A 19.103794,18.999977 0 0 0 19.103516,0 Z M 38.019531,16.361328 A 19.103794,18.999977 0 0 1 38.207031,19 19.103794,18.999977 0 0 1 38.017578,21.660156 c 0.191284,-0.841388 0.28711,-1.72713 0.28711,-2.660156 -10e-7,-0.924222 -0.0951,-1.80305 -0.285157,-2.638672 z m -18.65039,-0.349609 v 5.945312 A 9.8864288,9.832715 0 0 0 19.839844,19 9.8864288,9.832715 0 0 0 19.369141,16.011719 Z m 4.394531,-4.105469 v 14.201172 h 3.726562 c 0.989502,0 1.879007,-0.162845 2.660157,-0.486328 0.78115,-0.323141 1.439192,-0.791527 1.982421,-1.404297 0.543574,-0.612771 0.960742,-1.356252 1.251954,-2.234375 0.291212,-0.878464 0.4375,-1.872801 0.4375,-2.982422 0,-1.100047 -0.146288,-2.088675 -0.4375,-2.966797 -0.291212,-0.878464 -0.70838,-1.622485 -1.251954,-2.230469 -0.543229,-0.607984 -1.201271,-1.07637 -1.982421,-1.404296 -0.78115,-0.328273 -1.670655,-0.492188 -2.660157,-0.492188 z"
                />
                <path
                    style={{ fill: fillColor }}
                    d="m 43.151949,11.906777 v 5.399701 h 7.044789 v 3.286121 h -7.044789 v 5.515279 h 9.053362 v 3.401699 H 38.756605 V 8.5050787 H 52.205311 V 11.906777 Z M 71.184986,8.5050787 62.684823,29.509577 H 58.726126 L 50.225963,8.5050787 h 3.522395 c 0.378197,0 0.688663,0.086855 0.926584,0.2653517 0.237577,0.1784968 0.412235,0.4103376 0.528789,0.690051 l 4.570346,12.1018816 c 0.174658,0.453423 0.349317,0.945828 0.519162,1.481319 0.169845,0.53549 0.324906,1.100047 0.47034,1.688881 0.126181,-0.588834 0.267145,-1.153391 0.417393,-1.688881 0.150248,-0.535491 0.310466,-1.027896 0.485124,-1.481319 L 66.207218,9.4604814 c 0.09696,-0.2410733 0.271615,-0.4633395 0.519162,-0.6609854 0.247548,-0.1979879 0.5532,-0.2944173 0.921771,-0.2944173 z m -2.37233,10.5962843 h 7.684975 v 3.271759 h -7.684975 z m 21.687225,7.469512 v 2.938702 H 78.651982 v -2.938702 h 4.191805 V 15.077319 c 0,-0.25099 0.0048,-0.506767 0.01444,-0.767331 0.01,-0.260564 0.02441,-0.525916 0.04367,-0.796397 l -2.765313,2.28729 c -0.193912,0.144986 -0.383354,0.236628 -0.56764,0.275268 -0.184285,0.0383 -0.358944,0.0383 -0.523975,0.0048 -0.165032,-0.03385 -0.310466,-0.09164 -0.436647,-0.17371 -0.12618,-0.08207 -0.223136,-0.164135 -0.291212,-0.25099 l -1.266274,-1.693668 6.49159,-5.4718521 h 3.304072 V 26.570875 Z"
                />
            </g>
        </svg>
    );
}
