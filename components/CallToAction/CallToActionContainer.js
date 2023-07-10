import { Button, ButtonGroup } from "@components/Button";
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";

export const CallToActionContainer = () => {
    return (
        <SectionContainer className="footer-cta wrap wrap-px relative z-10">
            <div
                className="footer-cta--container -mt-20 rounded-[32px] bg-primary-900
"
            >
                <div className="footer-cta--content content text-center p-12 space-y-8">
                    <PageTitle className="text-center mx-auto" type="default">
                        Ready to meet your personal AI writing assistant?
                    </PageTitle>
                    <div className="content text-center mx-auto text-xl max-w-3xl">
                        <p>
                            Create high-quality content in no time with our
                            intuitive interface and cutting-edge features. Sign
                            up now and take your content to the next level.{" "}
                        </p>
                    </div>
                    <div className="text-center">
                        <ButtonGroup alignment="center">
                            <Button
                                href="/"
                                icon="material-symbols:arrow-forward-rounded"
                            >
                                Sign Up Now
                            </Button>
                            <Button variant="secondary">Demo</Button>
                        </ButtonGroup>
                    </div>
                </div>
            </div>
        </SectionContainer>
    );
};
