function main()
    [f, A, b, Aeq, beq, lb, ub] = SetDefaultValues()

    bcg = 1;
    dpt = 2;
    yf = 3;
    opv = 4;
    tt = 5;
    m = 6;
    
    vac_ind = dpt;
    
    %test with a free tetanus vaccine!
    %set tetanus cost == 0
    %A(2,tt) = 0;
    VaryVaccineCost(f, A, b, Aeq, beq, lb, ub, vac_ind)

end
    
function VaryVaccineCost(f, A, b, Aeq, beq,lb, ub, vac_ind)
    results = zeros([51, 6]);
    for new_cost = 0:50
        best_dist = OptimizeVaccineDistribution(vac_ind, new_cost);
        results(new_cost + 1,:) = best_dist;
    end
    figure; hold all;
%     disp(results(:,1))
%     disp('result')
%     disp(results(1,:))
     plot([0:50],results(:,1))
     plot([0:50],results(:,2))
     plot([0:50],results(:,3))
     plot([0:50],results(:,4))
     plot([0:50],results(:,5))
     plot([0:50],results(:,6))
     title('Number of Vaccines given, with changing cost of diptheria vaccine')
     xlabel('cost of diptheria vaccine')
     ylabel('number of vaccines given')
     legend('tuberculosis', 'diptheria-tetanus-pertussis-hepatitis', 'yellow fever', 'polio', 'tetanus','measles')



%     disp(new_cost)
%     disp(size(results))
%     disp(size(best_dist))
    
    function best_dist = OptimizeVaccineDistribution(vac_ind, new_cost)
        A(2,vac_ind) = new_cost;
        [x fval,exitflag,output,lambda] = linprog(f,A,b,Aeq,beq,lb,ub);
        %people_helped = sum(x .* disease_rate);
        best_dist = x;
    end

end

function [f,A,b,Aeq,beq,lb,ub] = SetDefaultValues()
    % define decisions variables
    bcg = 1;
    dpt = 2;
    yf = 3;
    opv = 4;
    tt = 5;
    m = 6;

    % percent getting disease vector
    disease_rate = zeros(6,1);
    disease_rate(bcg) = 0.00174;
    disease_rate(dpt) = 0.19;
    disease_rate(yf) = 0.08;
    disease_rate(opv) = 0.000022434;
    disease_rate(tt) = 0.0000000088024;
    disease_rate(m) = 0.08;
% 




    pop = 17830000/695;

    % lower bounds
    lb = zeros(6,1);

    % upper bounds
    ub = Inf(6,1);

    % inequality matrices
    A = zeros(14,6);
    b = zeros(14,1);
    % A = zeros(14,20);
    % b = zeros(14,1);


    % percent of population already vaccinated
    already_vacc = zeros(6,1);
    already_vacc(bcg) = .59;
    already_vacc(dpt) = .38;
    already_vacc(yf) = .33;
    already_vacc(opv) = .36;
    already_vacc(tt) = .33;
    already_vacc(m) = .445;

    already_vacc = already_vacc.*pop;



    % storage constraints
    % in volume per immunization (for one person) in cm^3
    A(1,bcg) = 1.2;
    A(1,dpt) = 16.8;
    A(1,yf) = 2.5;
    A(1,opv) = 4;
    A(1,tt) = 15;
    A(1,m) = 2.6;
    %b(1) = storage; % max storage at clinic is 28L


    %cost constraints
    %in cost per immunization (for one person) in USD
    A(2,bcg) = 0.13;
    A(2,dpt) = 29.64;
    A(2,yf) = 0.82;
    A(2,opv) = 0.84;
    A(2,tt) = 0.99;
    A(2,m) = 1.29;
    %b(2) = budget;

    % 60% of population at risk msut be vaccinated to prevent outbreak
    A(3,bcg) = -1;
    b(3) = -(.05 * pop - already_vacc(bcg));
    A(4,dpt) = -1;
    b(4) = -(.05 *pop - already_vacc(dpt));
    A(5,yf) = -1;
    b(5) = -(.05 * pop - already_vacc(yf));
    A(6,opv) = -1;
    b(6) = -(.05 * pop - already_vacc(opv));
    A(7,tt) = -1;
    b(7) = -(.05 *pop - already_vacc(tt));
    A(8,m) = -1;
    b(8) = -(.05 * pop - already_vacc(m));

    %contraint that you can't vaccinate > 100% of pop
    A(9,bcg) = 1;
    b(9) = 1 * pop - already_vacc(bcg);
    A(10,dpt) = 1;
    b(10) = (1 * pop - already_vacc(dpt));
    A(11,yf) = 1;
    b(11) = (1 * pop - already_vacc(yf));
    A(12,opv) = 1;
    b(12) = (1 * pop - already_vacc(opv));
    A(13,tt) = 1;
    b(13) = (1 * pop - already_vacc(tt));
    A(14,m) = 1;
    b(14) = (1 * pop - already_vacc(m));

    % equalities (none)
    Aeq = zeros(0,6);
    beq = zeros(0,1);

    % objective function

    % obj func vector
    f = zeros(6,1);
    f(bcg) = -disease_rate(bcg);
    f(dpt) = -disease_rate(dpt);
    f(yf) = -disease_rate(yf);
    f(opv) = -disease_rate(opv);
    f(tt) = -disease_rate(tt);
    f(m) = -disease_rate(m);
end

