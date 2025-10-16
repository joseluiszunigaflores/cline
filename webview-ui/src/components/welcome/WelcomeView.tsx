import { EmptyRequest } from "@shared/proto/cline/common"
import { VSCodeButton } from "@vscode/webview-ui-toolkit/react"
import { memo } from "react"
import { useTranslation } from "react-i18next"
import CoopelLogo from "@/assets/CoopelLogo"
import { AccountServiceClient } from "@/services/grpc-client"

const WelcomeView = memo(() => {
	const { t } = useTranslation()
	const handleLogin = () => {
		AccountServiceClient.accountLoginClicked(EmptyRequest.create()).catch((err) =>
			console.error("Failed to get login URL:", err),
		)
	}

	return (
		<div className="fixed inset-0 p-0 flex flex-col">
			<div className="h-full px-5 overflow-auto">
				<h2>{t("welcome.title")}</h2>
				<div className="flex justify-center my-5">
					<CoopelLogo className="h-16" />
				</div>
				<p>{t("welcome.description")}</p>

				<p className="text-[var(--vscode-descriptionForeground)]">{t("welcome.signupText")}</p>

				<VSCodeButton appearance="primary" className="w-full mt-1" onClick={handleLogin}>
					{t("welcome.loginButton")}
				</VSCodeButton>
			</div>
		</div>
	)
})

export default WelcomeView
