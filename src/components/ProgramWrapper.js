import React from 'react';
import styled from 'styled-components';

const ProgramsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 148px;
`;

const ProgramCard = styled.div`
  margin-left: 150px;
  padding: 20px;
  background-color: #007bff;
  color: #fff;
  width: 726px;
  height: 475px;
  border-radius: 60px;
`;

const ProgramTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  width: 319px;
height: 126px;
top: 1861px;
left: -228px;
gap: 0px;
opacity: 0px;

  font-family: Roboto;
font-size: 54px;
font-weight: 600;
line-height: 63.28px;
text-align: left;

`;

const ProgramDescription = styled.p`
  font-size: 16px;
  width: 328px;
height: 165px;
top: 2003px;
left: -228px;
gap: 0px;
opacity: 0px;
width: 328px;
height: 165px;
top: 2003px;
left: -228px;
gap: 0px;
opacity: 0px;
ы
`;

const ProgramWrapper = () => {
  return (
    <ProgramsGrid>
      <ProgramCard>
        <ProgramTitle>Занятия в центрах</ProgramTitle>
        <ProgramDescription>Классический формат занятий с использованием современных технологий.</ProgramDescription>
        <button style={{width: '276px', height: '82px', borderRadius: '30px',fontFamily:'Roboto', color:'#2998FF'}}>... КУРСОВ</button>
      </ProgramCard>
      <ProgramCard>
        <ProgramTitle>Онлайн обучение</ProgramTitle>
        <ProgramDescription>Индивидуальный и удобный для каждого темп обучения. Занимайтесь из дома на интерактивной платформе.</ProgramDescription>
        <button style={{width: '276px', height: '82px', borderRadius: '30px'}}>... КУРСОВ</button>

      </ProgramCard>
      <ProgramCard>
        <ProgramTitle>Репетиторы 1-11 класс</ProgramTitle>
        <ProgramDescription>Индивидуальные занятия по школьной программе с репетиторами, подготовка к ОГЭ и ЕГЭ.</ProgramDescription>
        <button style={{width: '276px', height: '82px', borderRadius: '30px'}}>... КУРСОВ</button>

      </ProgramCard>
      <ProgramCard>
        <ProgramTitle>Логопеды</ProgramTitle>
        <ProgramDescription>Подберем для вас индивидуального логопеда и организуем удобные онлайн-занятия с гарантией результата.</ProgramDescription>
        <button style={{width: '276px', height: '82px', borderRadius: '30px'}}>... КУРСОВ</button>

      </ProgramCard>
    </ProgramsGrid>
  );
};

export default ProgramWrapper;
