import { EmptyRequest } from "@shared/proto/cline/common"
import { useTranslation } from "react-i18next"
import CoopelLogo from "@/assets/CoopelLogo"
import HeroTooltip from "@/components/common/HeroTooltip"
import { useExtensionState } from "@/context/ExtensionStateContext"
import { UiServiceClient } from "@/services/grpc-client"

interface HomeHeaderProps {
	shouldShowQuickWins?: boolean
}

const HomeHeader = ({ shouldShowQuickWins = false }: HomeHeaderProps) => {
	const { t } = useTranslation()
	const { environment } = useExtensionState()

	const handleTakeATour = async () => {
		try {
			await UiServiceClient.openWalkthrough(EmptyRequest.create())
		} catch (error) {
			console.error("Error opening walkthrough:", error)
		}
	}

	return (
		<div className="flex flex-col items-center mb-5">
			<div className="my-5">
				<CoopelLogo className="h-16" />
			</div>
			<div className="text-center flex items-center justify-center">
				<h2 className="m-0 text-lg">{t("home.whatCanIDo")}</h2>
				<HeroTooltip className="max-w-[300px]" content={t("home.tooltip")} placement="bottom">
					<span className="codicon codicon-info ml-2 cursor-pointer text-link text-sm" />
				</HeroTooltip>
			</div>
			{shouldShowQuickWins && (
				<div className="mt-4">
					<button
						className="flex items-center gap-2 px-4 py-2 rounded-full border border-border-panel bg-white/[0.02] hover:bg-list-background-hover transition-colors duration-150 ease-in-out text-code-foreground text-sm font-medium cursor-pointer"
						onClick={handleTakeATour}
						type="button">
						{t("home.takeATour")}
						<span className="codicon codicon-play scale-90"></span>
					</button>
				</div>
			)}
		</div>
	)
}

export default HomeHeader
