import React from "react";
import styled from "styled-components";
import {Article} from "../../styles/BlockStyles";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Button} from "../en-components/button/Button";


export type DisplayConfig = {
    showTarget: boolean;
    sourceDelay: number;
    targetDelay: number;
    random: boolean;
};


type DisplaySettingsProps = {
    config: DisplayConfig;
    onChange: (config: DisplayConfig) => void;
    onStart: () => void;
    onBack: () => void;
};

export const DISPLAY_DELAY_LIMITS = {
    MIN: 500,
    MAX: 20000,
    STEP: 500
} as const;


export const DEFAULT_DISPLAY_CONFIG: DisplayConfig = {
    showTarget: true,
    sourceDelay: 2000,
    targetDelay: 2000,
    random: false
};

export const DisplaySettings = (
    {config, onChange, onStart, onBack}: DisplaySettingsProps) => {

    const update = <K extends keyof DisplayConfig>(
        key: K,
        value: DisplayConfig[K]
    ) => {
        onChange({
            ...config,
            [key]: value
        });
    };

    return (
        <Article>

            <FlexWrapper
                gap={'20px'}
                margin={'0 0 20px 0'}
                justify={'end'}
                wrap={'wrap'}
                position={'relative'}
            >
                <Button iconId={"back"} onClick={onBack}/>
                <Button iconId={"startMode"} onClick={onStart}/>

            </FlexWrapper>

            <FlexWrapper direction="column" gap="24px">

                {/* ORIGINAL LANGUAGE */}
                <Block>
                    <Label>Original word delay (ms)</Label>
                    <Range
                        type="range"
                        min={DISPLAY_DELAY_LIMITS.MIN}
                        max={DISPLAY_DELAY_LIMITS.MAX}
                        step={DISPLAY_DELAY_LIMITS.STEP}
                        value={config.sourceDelay}
                        onChange={(e) =>
                            update("sourceDelay", Number(e.target.value))
                        }
                    />
                    <Value>{config.sourceDelay} ms</Value>
                </Block>

                {/* TRANSLATION */}
                <Block>
                    <CheckboxRow>
                        <input
                            type="checkbox"
                            checked={config.showTarget}
                            onChange={(e) =>
                                update("showTarget", e.target.checked)
                            }
                        />
                        <span>Show translation</span>
                    </CheckboxRow>

                    <Label disabled={!config.showTarget}>
                        Translation delay (ms)
                    </Label>
                    <Range
                        type="range"
                        min={DISPLAY_DELAY_LIMITS.MIN}
                        max={DISPLAY_DELAY_LIMITS.MAX}
                        step={DISPLAY_DELAY_LIMITS.STEP}
                        value={config.targetDelay}
                        disabled={!config.showTarget}
                        onChange={(e) =>
                            update("targetDelay", Number(e.target.value))
                        }
                    />
                    <Value disabled={!config.showTarget}>
                        {config.targetDelay} ms
                    </Value>
                </Block>

                {/* RANDOM */}
                <Block>
                    <CheckboxRow>
                        <input
                            type="checkbox"
                            checked={config.random}
                            onChange={(e) =>
                                update("random", e.target.checked)
                            }
                        />
                        <span>Random order</span>
                    </CheckboxRow>
                </Block>

            </FlexWrapper>
        </Article>
    );
};

/* ================= styles ================= */
const Block = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const Label = styled.label<{ disabled?: boolean }>`
    font-size: 14px;
    opacity: ${({disabled}) => (disabled ? 0.4 : 1)};
`;

const Value = styled.div<{ disabled?: boolean }>`
    font-size: 13px;
    opacity: ${({disabled}) => (disabled ? 0.4 : 1)};
`;

const Range = styled.input`
    width: 100%;
`;

const CheckboxRow = styled.label`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
`;
