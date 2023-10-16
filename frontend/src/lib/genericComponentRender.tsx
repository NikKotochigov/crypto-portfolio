import React from 'react';

export function genericComponentRender<Props>(Component: React.FC<Props>, props: Props) {
    return <Component {...(props as React.JSX.IntrinsicAttributes & Props)} />;
}
