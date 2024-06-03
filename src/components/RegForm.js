import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useTranslation } from 'react-i18next';

const RegForm = () => {
    const [t, i18n] = useTranslation('global');

    const [data, setData] = useState([]);

    const [valueName,setValueName] = useState('')
    const [valueNumber,setValueNumber] = useState('')
    const [valueMail,setValueMail] = useState('')
    const [valueDate,setValueDate] = useState('')
    const [valueService,setValueService] = useState('')
    const [valueTime,setValueTime] = useState('')
    const [valueLocation,setValueLocation] = useState('')
    const [valueSize,setValueSize] = useState('')

    const [printedData, setPrintedData] = useState('');

    const [date,setDate] = useState(new Date())

    const [selectedDate, setSelectedDate] = useState(new Date());

    // const selectedDateString = selectedDate.toDateString();
    // const [selectedData, setSelectedData] = useState([]);


    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('key')) || [];
        setData(storedData);
    }, []);

    const handleSubmit = (ev) => {
        ev.preventDefault();

         data.push({
            id:new Date().getTime(),
            valueName,
            valueNumber,
            valueMail,
            valueDate,
            valueService,
            valueTime,
            valueLocation,
            valueSize,
        })

        const updatedData = [...data];
        localStorage.setItem('key', JSON.stringify(updatedData));
        setData(updatedData);

        setValueName('');
        setValueNumber('');
        setValueMail('');
        setValueDate('');
        setValueService('');
        setValueTime('');
        setValueLocation('');
        setValueSize('');
    };

    // const handleDateClick = (date) => {
    //     setSelectedDate(date)
    //     const selectedDateString = date.toDateString();
    //     const filteredData = data.filter(item => item.valueDate === selectedDateString);
    //     setSelectedData(filteredData);
    //
    //     let printedContent = '';
    //     let index = 0;
    //
    //     do {
    //         const item = data[index];
    //
    //         printedContent += `Date: ${item.valueDate}<br>`;
    //         printedContent += `Service: ${item.valueService}<br>`;
    //         printedContent += '---<br>';
    //
    //         // if (item.valueDate === selectedDateString) {
    //         //     printedContent += `Date: ${item.valueDate}<br>`;
    //         //     printedContent += `Service: ${item.valueService}<br>`;
    //         //     printedContent += '---<br>';
    //         // }
    //         index++;
    //
    //     } while (index < data.length);
    //     setPrintedData(printedContent);
    // };


    // const handleDateClick = (date) => {
    //     setSelectedDate(date);
    //     const selectedDateString = date.toDateString();
    //     const filteredData = data.filter(item => item.valueDate === selectedDateString);
    //     setSelectedData(filteredData);
    //
    //     const printedContent = filteredData.map(item => (
    //         <div key={item.id}>
    //             <p>Date: {item.valueDate}</p>
    //             <p>Service: {item.valueService}</p>
    //             <hr />
    //         </div>
    //     ));
    //
    //     setPrintedData(printedContent);
    // };


    return (
        <div className={'formCalendar'}>
            <form onSubmit={handleSubmit} className={'registration'}>
                <input
                    type="text"
                    value={valueName}
                    onChange={(ev) => setValueName(ev.target.value)}
                    placeholder="Name Surname"
                    className={'inputName'}
                />

                <input
                    type="text"
                    value={valueNumber}
                    onChange={(ev) => setValueNumber(ev.target.value)}
                    placeholder="Phone Number"
                    className={'inputName'}
                />
                <input
                    type="email"
                    value={valueMail}
                    onChange={(ev) => setValueMail(ev.target.value)}
                    placeholder="Email"
                    className={'inputName'}
                />

                <select
                    className={'serviceTypeSelection'}
                    value={valueService}
                    onChange={(ev) => setValueService(ev.target.value)}
                >
                    <option>{t("contact.inputsField.serviceType.title")}</option>
                    <option value="Factory Cleaning">{t("contact.inputsField.serviceType.factory")}</option>
                    <option value="House Cleaning">{t("contact.inputsField.serviceType.house")}</option>
                    <option value="Office Cleaning">{t("contact.inputsField.serviceType.office")}</option>
                    <option value="Car Washing">{t("contact.inputsField.serviceType.car")}</option>
                </select>

                <input
                    type="date"
                    value={valueDate}
                    onChange={(ev) => setValueDate(ev.target.value)}
                    placeholder="Day"
                    className={'inputDate'}
                />

                <input
                    type="time"
                    value={valueTime}
                    onChange={(ev) => setValueTime(ev.target.value)}
                    placeholder="Day"
                    className={'inputTime'}
                />
                <input
                    type="text"
                    value={valueLocation}
                    onChange={(ev) => setValueLocation(ev.target.value)}
                    placeholder="Location"
                    className={'inputName'}
                />
                <input
                    type="number"
                    value={valueSize}
                    onChange={(ev) => setValueSize(ev.target.value)}
                    placeholder="Size"
                    className={'inputName'}
                />
                <button type="submit" className={'buttonSubmit'}>
                    Submit
                </button>
            </form>

            {/*<section className={'calendar'}>*/}
            {/*    <h1>Our free days</h1>*/}
            {/*    <div className={'calendarAndInfo'}>*/}
            {/*        <div className={'freeDays'}>*/}
            {/*            <Calendar value={selectedDate} onClickDay={handleDateClick}/>*/}

            {/*            <div className={'infoAboutDays'}>*/}
            {/*                <h1>{selectedDateString}</h1>*/}
            {/*                <div dangerouslySetInnerHTML={{ __html: printedData }} />*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
        </div>
    );
};

export default RegForm;
