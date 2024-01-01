import { ReactNode } from "react";
import { SWRConfig } from "swr";

export default function SWRCacheProvider({
	children,
}: {
	children: ReactNode;
}): JSX.Element {
	return (
		<SWRConfig value={{ provider: () => new Map() }}>{children}</SWRConfig>
	);
}
