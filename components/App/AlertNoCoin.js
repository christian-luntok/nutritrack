import { Button, ButtonGroup } from "@components/Button";
export const AlertNoCoin = () => {
    return (
        <div className="alert--no-coins text-left border border-secondary-200 py-6 px-6 rounded-xl bg-secondary-50/20">
            <div className="flex flex-grow items-start flex-col gap-2 text-secondary-500">
                <h2 className="text-base font-semibold mb-0">
                    Speed up your writing process with Articoole!
                </h2>
                <p className="mt-0 mb-2">
                    Subscribe to a plan to get credits and continue generating
                    content with AI.
                </p>
                <ButtonGroup alignment="center">
                    <Button
                        href="/settings/pricing"
                        variant="secondary"
                        icon="material-symbols:arrow-forward-rounded"
                    >
                        Grab some credits!
                    </Button>
                </ButtonGroup>
            </div>
        </div>
    );
};
