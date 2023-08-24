import { Col, Form, Input, Row, Select } from "antd"
import { BaseOptionType, DefaultOptionType } from "antd/es/select"
import React from "react"
// import {StyledSelect} from "../../styles/select.style";

interface Props {
    lable1: string,
    lable2: string,
    type1: string,
    type2: string,
    options1?: (BaseOptionType | DefaultOptionType)[],
    options2?: (BaseOptionType | DefaultOptionType)[]
}

export const generatePlaceholder = (label: string, type: string): string => {
    if (type === "input") {
        return `Enter ${label.toLowerCase()}`;
    } else if (type === "select" && label !== 'Select Location/Branch') {
        return `Select ${label.toLowerCase()}`;
    }
    return label;
};

function renderComponentByType(type, lable, options) {
    switch(type) {
        case 'input':
            return <Input placeholder={generatePlaceholder(lable, type)} />;
        case 'select':
            return (
                <Select
                    placeholder={generatePlaceholder(lable, type)}
                    options={options}
                />
            );
        case 'date':
            return (
                <div>
                    <Select placeholder="Day" options={days} />
                    <Select placeholder="Month" options={months} />
                    <Select placeholder="Year" options={years} />
                </div>
            );
        default:
            return null;
    }
}

export const days = Array.from({ length: 31 }, (_, index) => {
    return {
        value: (index + 1).toString(),
        label: (index + 1).toString()
    } as BaseOptionType;
});

export const months = Array.from({ length: 12 }, (_, index) => {
    return {
        value: (index + 1).toString(),
        label: (index + 1).toString()
    } as BaseOptionType;
});

const currentYear = new Date().getFullYear();
export const years = Array.from({ length: currentYear - 1900 + 1 }, (_, index) => {
    return {
        value: (1900 + index).toString(),
        label: (1900 + index).toString()
    } as BaseOptionType;
});


export const FormRow = ({lable1,lable2, type1, type2, options1 = [], options2 = []}:Props) => {
    const items = [
        { lable: lable1, type: type1, options: options1 },
        { lable: lable2, type: type2, options: options2 },
    ];
      
    return (
    <Row gutter={16}>
        {items.map(({lable, type, options}, index) => {
            console.log(index);
            return (
                <Col span={12} key={index}>
                    <Form.Item label={`${lable}`}>
                    {renderComponentByType(type, lable,options)}
                    </Form.Item>
                </Col>
            )
        })}
      </Row>
    )
}