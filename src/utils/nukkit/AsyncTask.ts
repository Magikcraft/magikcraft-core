export = ({
	onRun,
	onCompletion = () => {},
}: {
	onRun: () => void
	onCompletion?: (server?) => void
}) => {
	const AsyncTaskNukkit = Java.type('cn.nukkit.scheduler.AsyncTask')
	const AsyncTaskClass = (Java as any).extend(AsyncTaskNukkit, {
		onRun,
		onCompletion,
	})
	return new AsyncTaskClass()
}
